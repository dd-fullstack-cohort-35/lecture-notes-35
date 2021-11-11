# SSL and Let's Encrypt

### HTTPS and SSL
- **https** - http connections that are encrypted to protect them from being read
- **SSL** - Secure Socket Layer - public key and private key pairs similar to ssh authentication
    - private key is never shared
    - public key can be shared freely
    - information is encrypted with the public key, but decrypted with the private key
- Both use encryption
    - similar to hashing, except that hashing can't be reversed
    - **certificate** - a document that verifies that a website is who it says it is
        - certificates are signed by Certificate Authorities (CA) who verify a website before issuing the certificate
        - certificates signatures are one-way hashes such that they can be checked using a public key,
          but only generated using the private key (which is held by the CA)
- We used to have to pay for certificate authentication, which was a racket that promised verification without really doing much validation
- New way - Let's Encrypt and Certbot - Automate the process so that we can verify that person who controls the domain is issued the certificate
    - Free!
    - Prevents somebody else from hijacking the domain
    - certificates only last 90 days, so you have to automate the renewal process

### How to serve your PWP in https
- Example code is at https://github.com/dd-fullstack-cohort-35/pwp-hosting-starter
- Run through the instructions in the README
    - You will add some code from that repo to your project, and run some commands on your droplet

### Further reading
- https://www.digitalocean.com/community/tutorials/an-introduction-to-let-s-encrypt
- https://security.stackexchange.com/questions/8145/does-https-prevent-man-in-the-middle-attacksby-proxy-server
- https://stackoverflow.com/questions/2112685/how-do-one-way-hash-functions-work-edited
- https://security.stackexchange.com/questions/129126/why-is-it-not-possible-to-fake-a-digitalcertificate
