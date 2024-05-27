import { Typography } from 'antd';

const Footer = () => {
  return (
    <div className="AppFooter" style={{ textAlign: 'center', padding: '20px 0', background: '#f0f2f5' }}>
      <Typography.Link href="mailto:contact@yourblog.com">contact@yourblog.com</Typography.Link>
      <br />
      <Typography.Link href="/about" target={'_self'}>
        About Us
      </Typography.Link>
      <Typography.Link href="/privacy-policy" target={'_self'}>
        Privacy Policy
      </Typography.Link>
      <Typography.Link href="/terms-of-use" target={'_self'}>
        Terms of Use
      </Typography.Link>
      <br />
      <Typography.Link href="https://www.facebook.com/yourblog" target={'_blank'}>
        Facebook
      </Typography.Link>
      <Typography.Link href="https://www.twitter.com/yourblog" target={'_blank'}>
        Twitter
      </Typography.Link>
      <Typography.Link href="https://www.instagram.com/yourblog" target={'_blank'}>
        Instagram
      </Typography.Link>
      <br />
      <Typography.Text type="secondary">
        &copy; {new Date().getFullYear()} Your Blog. All rights reserved.
      </Typography.Text>
    </div>
  );
};

export default Footer;
