import React from 'react';

interface EmailTemplateProps {
  message: string,
  email: string
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ message, email }) => {
  return (
    <div>
      <p>{message}</p>
      <p>Contact {email}</p>
    </div>
  );
};