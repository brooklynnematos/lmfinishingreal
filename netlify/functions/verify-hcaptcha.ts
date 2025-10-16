import { Handler } from '@netlify/functions';
import fetch from 'node-fetch';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

export const handler: Handler = async (event) => {
  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
      body: JSON.stringify({ success: false, message: 'Method not allowed' }),
    };
  }

  try {
    if (!event.body) {
      throw new Error('Missing request body');
    }

    const { token } = JSON.parse(event.body);

    if (!token) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
        body: JSON.stringify({ success: false, message: 'Token is required' }),
      };
    }

    const verifyUrl = 'https://hcaptcha.com/siteverify';
    const secretKey = process.env.HCAPTCHA_SECRET_KEY;

    if (!secretKey) {
      console.error('hCaptcha secret key not configured');
      throw new Error('hCaptcha configuration error');
    }

    const response = await fetch(verifyUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    if (!response.ok) {
      throw new Error('Failed to verify hCaptcha');
    }

    const data = await response.json();
    console.log('hCaptcha verification response:', data);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
      body: JSON.stringify({
        success: data.success,
        challenge_ts: data.challenge_ts,
        hostname: data.hostname
      }),
    };
  } catch (error) {
    console.error('hCaptcha verification error:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
      body: JSON.stringify({
        success: false,
        message: error instanceof Error ? error.message : 'Internal server error',
      }),
    };
  }
};