export interface Preset {
    headers: Record<string, string>;
    flags: string[];
}

export type PresetMap = {
    chrome: ChromePresetVersion;
    firefox: FirefoxPresetVersion;
    safari: SafariPresetVersion;
};

export type ChromePresetVersion = "107" | "110" | "116" | "124" | "131" | "133a";

export const ChromePresets: Record<ChromePresetVersion, Preset> = {
    "107": {
        headers: {
            "sec-ch-ua": `\\"Google Chrome\\";v=\\"107\\", \\"Chromium\\";v=\\"107\\", \\"Not=A?Brand\\";v=\\"24\\"`,
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "Windows",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "Sec-Fetch-Site": "none",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-User": "?1",
            "Sec-Fetch-Dest": "document",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-US,en;q=0.9"
        },
        flags: [
            "--ciphers TLS_AES_128_GCM_SHA256,TLS_AES_256_GCM_SHA384,TLS_CHACHA20_POLY1305_SHA256,ECDHE-ECDSA-AES128-GCM-SHA256,ECDHE-RSA-AES128-GCM-SHA256,ECDHE-ECDSA-AES256-GCM-SHA384,ECDHE-RSA-AES256-GCM-SHA384,ECDHE-ECDSA-CHACHA20-POLY1305,ECDHE-RSA-CHACHA20-POLY1305,ECDHE-RSA-AES128-SHA,ECDHE-RSA-AES256-SHA,AES128-GCM-SHA256,AES256-GCM-SHA384,AES128-SHA,AES256-SHA",
            "--http2",
            "--http2-settings '1:65536;2:0;3:1000;4:6291456;6:262144'",
            "--http2-window-update 15663105",
            "--http2-stream-weight 256",
            "--http2-stream-exclusive 1",
            "--compressed",
            "--tlsv1.2",
            "--alps",
            "--cert-compression brotli",
            "--tls-grease",
            "--tls-signed-cert-timestamps"
        ]
    },
    "110": {
        headers: {
            "sec-ch-ua": `\\"Chromium\\";v="110\\", \\"Not A(Brand\\";v=\\"24\\", \\"Google Chrome\\";v=\\"110\\"`,
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "Windows",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
            Accept: "application/json, text/plain, */*",
            "Sec-Fetch-Site": "none",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-User": "?1",
            "Sec-Fetch-Dest": "document",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-US,en;q=0.9"
        },
        flags: [
            "--ciphers TLS_AES_128_GCM_SHA256,TLS_AES_256_GCM_SHA384,TLS_CHACHA20_POLY1305_SHA256,ECDHE-ECDSA-AES128-GCM-SHA256,ECDHE-RSA-AES128-GCM-SHA256,ECDHE-ECDSA-AES256-GCM-SHA384,ECDHE-RSA-AES256-GCM-SHA384,ECDHE-ECDSA-CHACHA20-POLY1305,ECDHE-RSA-CHACHA20-POLY1305,ECDHE-RSA-AES128-SHA,ECDHE-RSA-AES256-SHA,AES128-GCM-SHA256,AES256-GCM-SHA384,AES128-SHA,AES256-SHA",
            "--http2",
            "--http2-no-server-push",
            "--compressed",
            "--tlsv1.2",
            "--alps",
            "--tls-permute-extensions",
            "--cert-compression brotli",
            "--tls-grease",
            "--tls-signed-cert-timestamps"
        ]
    },
    "116": {
        headers: {
            "sec-ch-ua": `\\"Chromium\\";v=\\"116\\", \\""Not)A;Brand\\";v=\\"24\\", \\"Google Chrome\\";v=\\"116\\"`,
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "Windows",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
            Accept: "application/json, text/plain, */*",
            "Sec-Fetch-Site": "none",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-User": "?1",
            "Sec-Fetch-Dest": "document",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-US,en;q=0.9"
        },
        flags: [
            "--ciphers TLS_AES_128_GCM_SHA256,TLS_AES_256_GCM_SHA384,TLS_CHACHA20_POLY1305_SHA256,ECDHE-ECDSA-AES128-GCM-SHA256,ECDHE-RSA-AES128-GCM-SHA256,ECDHE-ECDSA-AES256-GCM-SHA384,ECDHE-RSA-AES256-GCM-SHA384,ECDHE-ECDSA-CHACHA20-POLY1305,ECDHE-RSA-CHACHA20-POLY1305,ECDHE-RSA-AES128-SHA,ECDHE-RSA-AES256-SHA,AES128-GCM-SHA256,AES256-GCM-SHA384,AES128-SHA,AES256-SHA",
            "--http2",
            "--http2-no-server-push",
            "--compressed",
            "--tlsv1.2",
            "--alps",
            "--tls-permute-extensions",
            "--cert-compression brotli",
            "--tls-grease",
            "--tls-signed-cert-timestamps"
        ]
    },
    "124": {
        headers: {
            "sec-ch-ua": `\\"Chromium\\";v=\\"124\\", \\"Google Chrome\\";v=\\"124\\", \\"Not-A.Brand\\";v=\\"99\\"`,
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "macOS",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "Sec-Fetch-Site": "none",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-User": "?1",
            "Sec-Fetch-Dest": "document",
            "Accept-Encoding": "gzip, deflate, br, zstd",
            "Accept-Language": "en-US,en;q=0.9",
            Priority: "u=0, i"
        },
        flags: [
            "--ciphers TLS_AES_128_GCM_SHA256,TLS_AES_256_GCM_SHA384,TLS_CHACHA20_POLY1305_SHA256,ECDHE-ECDSA-AES128-GCM-SHA256,ECDHE-RSA-AES128-GCM-SHA256,ECDHE-ECDSA-AES256-GCM-SHA384,ECDHE-RSA-AES256-GCM-SHA384,ECDHE-ECDSA-CHACHA20-POLY1305,ECDHE-RSA-CHACHA20-POLY1305,ECDHE-RSA-AES128-SHA,ECDHE-RSA-AES256-SHA,AES128-GCM-SHA256,AES256-GCM-SHA384,AES128-SHA,AES256-SHA",
            "--curves X25519Kyber768Draft00:X25519:P-256:P-384",
            "--http2",
            "--http2-settings '1:65536;2:0;4:6291456;6:262144'",
            "--http2-window-update 15663105",
            "--http2-stream-weight 256",
            "--http2-stream-exclusive 1",
            "--compressed",
            "--ech GREASE",
            "--tlsv1.2",
            "--alps",
            "--tls-permute-extensions",
            "--cert-compression brotli",
            "--tls-grease",
            "--tls-signed-cert-timestamps"
        ]
    },
    "131": {
        headers: {
            "sec-ch-ua": `\\"Chromium\\";v=\\"131\\", \\"Google Chrome\\";v=\\"131\\", \\"Not-A.Brand\\";v=\\"24\\"`,
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "macOS",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "Sec-Fetch-Site": "none",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-User": "?1",
            "Sec-Fetch-Dest": "document",
            "Accept-Encoding": "gzip, deflate, br, zstd",
            "Accept-Language": "en-US,en;q=0.9",
            Priority: "u=0, i"
        },
        flags: [
            "--ciphers TLS_AES_128_GCM_SHA256,TLS_AES_256_GCM_SHA384,TLS_CHACHA20_POLY1305_SHA256,ECDHE-ECDSA-AES128-GCM-SHA256,ECDHE-RSA-AES128-GCM-SHA256,ECDHE-ECDSA-AES256-GCM-SHA384,ECDHE-RSA-AES256-GCM-SHA384,ECDHE-ECDSA-CHACHA20-POLY1305,ECDHE-RSA-CHACHA20-POLY1305,ECDHE-RSA-AES128-SHA,ECDHE-RSA-AES256-SHA,AES128-GCM-SHA256,AES256-GCM-SHA384,AES128-SHA,AES256-SHA",
            "--curves X25519MLKEM768:X25519:P-256:P-384",
            "--http2",
            "--http2-settings '1:65536;2:0;4:6291456;6:262144'",
            "--http2-window-update 15663105",
            "--http2-stream-weight 256",
            "--http2-stream-exclusive 1",
            "--compressed",
            "--ech GREASE",
            "--tlsv1.2",
            "--alps",
            "--tls-permute-extensions",
            "--cert-compression brotli",
            "--tls-grease",
            "--tls-signed-cert-timestamps"
        ]
    },
    "133a": {
        headers: {
            "sec-ch-ua": `Not(A:Brand\\";v=\\"99\\", \\"Google Chrome\\";v=\\"133\\", \\"Chromium\\";v=\\"133\\"`,
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "macOS",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "Sec-Fetch-Site": "none",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-User": "?1",
            "Sec-Fetch-Dest": "document",
            "Accept-Encoding": "gzip, deflate, br, zstd",
            "Accept-Language": "en-US,en;q=0.9",
            Priority: "u=0, i"
        },
        flags: [
            "--ciphers TLS_AES_128_GCM_SHA256,TLS_AES_256_GCM_SHA384,TLS_CHACHA20_POLY1305_SHA256,ECDHE-ECDSA-AES128-GCM-SHA256,ECDHE-RSA-AES128-GCM-SHA256,ECDHE-ECDSA-AES256-GCM-SHA384,ECDHE-RSA-AES256-GCM-SHA384,ECDHE-ECDSA-CHACHA20-POLY1305,ECDHE-RSA-CHACHA20-POLY1305,ECDHE-RSA-AES128-SHA,ECDHE-RSA-AES256-SHA,AES128-GCM-SHA256,AES256-GCM-SHA384,AES128-SHA,AES256-SHA",
            "--curves X25519MLKEM768:X25519:P-256:P-384",
            "--http2",
            "--http2-settings '1:65536;2:0;4:6291456;6:262144'",
            "--http2-window-update 15663105",
            "--http2-stream-weight 256",
            "--http2-stream-exclusive 1",
            "--compressed",
            "--ech GREASE",
            "--tlsv1.2",
            "--alps",
            "--tls-permute-extensions",
            "--cert-compression brotli",
            "--tls-grease",
            "--tls-use-new-alps-codepoint",
            "--tls-signed-cert-timestamps"
        ]
    }
};

export type FirefoxPresetVersion = "109" | "117" | "120" | "135";

export const FirefoxPresets: Record<FirefoxPresetVersion, Preset> = {
    "109": {
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0",
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.5",
            "Accept-Encoding": "gzip, deflate, br",
            "Upgrade-Insecure-Requests": "1",
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Site": "none",
            "Sec-Fetch-User": "?1",
            TE: "Trailers"
        },
        flags: ["--http2", "--compressed"]
    },
    "117": {
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:117.0) Gecko/20100101 Firefox/117.0",
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.5",
            "Accept-Encoding": "gzip, deflate, br",
            "Upgrade-Insecure-Requests": "1",
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Site": "none",
            "Sec-Fetch-User": "?1",
            TE: "Trailers"
        },
        flags: [
            "--ciphers aes_128_gcm_sha_256,chacha20_poly1305_sha_256,aes_256_gcm_sha_384,ecdhe_ecdsa_aes_128_gcm_sha_256,ecdhe_rsa_aes_128_gcm_sha_256,ecdhe_ecdsa_chacha20_poly1305_sha_256,ecdhe_rsa_chacha20_poly1305_sha_256,ecdhe_ecdsa_aes_256_gcm_sha_384,ecdhe_rsa_aes_256_gcm_sha_384,ecdhe_ecdsa_aes_256_sha,ecdhe_ecdsa_aes_128_sha,ecdhe_rsa_aes_128_sha,ecdhe_rsa_aes_256_sha,rsa_aes_128_gcm_sha_256,rsa_aes_256_gcm_sha_384,rsa_aes_128_sha,rsa_aes_256_sha",
            "--http2",
            "--compressed"
        ]
    },
    "120": {
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/120.0",
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.5",
            "Accept-Encoding": "gzip, deflate, br",
            "Upgrade-Insecure-Requests": "1",
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Site": "none",
            "Sec-Fetch-User": "?1",
            TE: "Trailers"
        },
        flags: [
            "--ciphers TLS_AES_128_GCM_SHA256,TLS_CHACHA20_POLY1305_SHA256,TLS_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA,TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA,TLS_RSA_WITH_AES_128_GCM_SHA256,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_CBC_SHA,TLS_RSA_WITH_AES_256_CBC_SHA",
            "--http2",
            "--http2-settings '3:0:0:201,5:0:0:101,7:0:0:1,9:0:7:1,11:0:3:1,13:0:0:241'",
            "--http2-window-update 12517377",
            "--http2-pseudo-headers-order 'mpas'",
            "--compressed",
            "--ech GREASE"
        ]
    },
    "135": {
        headers: {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:135.0) Gecko/20100101 Firefox/135.0",
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.5",
            "Accept-Encoding": "gzip, deflate, br, zstd",
            "Upgrade-Insecure-Requests": "1",
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Site": "none",
            "Sec-Fetch-User": "?1",
            Priority: "u=0, i",
            TE: "Trailers"
        },
        flags: [
            "--ciphers TLS_AES_128_GCM_SHA256,TLS_CHACHA20_POLY1305_SHA256,TLS_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA,TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA,TLS_RSA_WITH_AES_128_GCM_SHA256,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_CBC_SHA,TLS_RSA_WITH_AES_256_CBC_SHA",
            "--curves X25519MLKEM768:X25519:P-256:P-384:P-521:ffdhe2048:ffdhe3072",
            "--signature-hashes ecdsa_secp256r1_sha256,ecdsa_secp384r1_sha384,ecdsa_secp521r1_sha512,rsa_pss_rsae_sha256,rsa_pss_rsae_sha384,rsa_pss_rsae_sha512,rsa_pkcs1_sha256,rsa_pkcs1_sha384,rsa_pkcs1_sha512,ecdsa_sha1,rsa_pkcs1_sha1",
            "--http2",
            "--http2-settings '1:65536;2:0;4:131072;5:16384'",
            "--http2-window-update 12517377",
            "--http2-pseudo-headers-order 'mpas'",
            "--http2-stream-weight 42",
            "--http2-stream-exclusive 0",
            "--compressed",
            "--ech GREASE",
            "--tls-extension-order '0-23-65281-10-11-35-16-5-34-18-51-43-13-45-28-27-65037'",
            "--tls-delegated-credentials 'ecdsa_secp256r1_sha256:ecdsa_secp384r1_sha384:ecdsa_secp521r1_sha512:ecdsa_sha1'",
            "--tls-record-size-limit 4001",
            "--tls-key-shares-limit 3",
            "--cert-compression zlib,brotli,zstd",
            "--tls-signed-cert-timestamps"
        ]
    }
};

export type SafariPresetVersion = "15.5" | "18.0";

export const SafariPresets: Record<SafariPresetVersion, Preset> = {
    "15.5": {
        headers: {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.5 Safari/605.1.15",
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
            "Accept-Encoding": "gzip, deflate, br"
        },
        flags: [
            "--ciphers TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384:TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256:TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256:TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384:TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256:TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256:TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA:TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA:TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA:TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA:TLS_RSA_WITH_AES_256_GCM_SHA384:TLS_RSA_WITH_AES_128_GCM_SHA256:TLS_RSA_WITH_AES_256_CBC_SHA:TLS_RSA_WITH_AES_128_CBC_SHA:TLS_ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA:TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA:TLS_RSA_WITH_3DES_EDE_CBC_SHA",
            "--curves X25519:P-256:P-384:P-521",
            "--signature-hashes ecdsa_secp256r1_sha256,rsa_pss_rsae_sha256,rsa_pkcs1_sha256,ecdsa_secp384r1_sha384,ecdsa_sha1,rsa_pss_rsae_sha384,rsa_pss_rsae_sha384,rsa_pkcs1_sha384,rsa_pss_rsae_sha512,rsa_pkcs1_sha512,rsa_pkcs1_sha1",
            "--http2",
            "--false-start",
            "--compressed",
            "--tlsv1.0",
            "--no-tls-session-ticket",
            "--cert-compression zlib",
            "--http2-pseudo-headers-order mspa",
            "--location",
            "--tls-signed-cert-timestamps"
        ]
    },
    "18.0": {
        headers: {
            "sec-fetch-dest": "document",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15",
            accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "sec-fetch-site": "none",
            "sec-fetch-mode": "navigate",
            priority: "u=0, i",
            "accept-language": "en-US,en;q=0.9",
            "accept-encoding": "gzip, deflate, br"
        },
        flags: [
            "--ciphers TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384:TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256:TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256:TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384:TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256:TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256:TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA:TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA:TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA:TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA:TLS_RSA_WITH_AES_256_GCM_SHA384:TLS_RSA_WITH_AES_128_GCM_SHA256:TLS_RSA_WITH_AES_256_CBC_SHA:TLS_RSA_WITH_AES_128_CBC_SHA:TLS_ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA:TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA:TLS_RSA_WITH_3DES_EDE_CBC_SHA",
            "--curves X25519:P-256:P-384:P-521",
            "--signature-hashes ecdsa_secp256r1_sha256,rsa_pss_rsae_sha256,rsa_pkcs1_sha256,ecdsa_secp384r1_sha384,rsa_pss_rsae_sha384,rsa_pss_rsae_sha384,rsa_pkcs1_sha384,rsa_pss_rsae_sha512,rsa_pkcs1_sha512,rsa_pkcs1_sha1",
            "--http2",
            "--http2-settings '2:0;3:100;4:2097152;8:1;9:1'",
            "--http2-pseudo-headers-order msap",
            "--http2-window-update 10420225 ",
            "--http2-stream-weight 256",
            "--http2-stream-exclusive 0",
            "--compressed",
            "--tlsv1.0",
            "--no-tls-session-ticket",
            "--cert-compression zlib",
            "--tls-grease",
            "--tls-signed-cert-timestamps"
        ]
    }
};

export type BrowserPresetMap = {
    [K in keyof PresetMap]: Record<PresetMap[K], Preset>;
};

export const BrowserPresets: BrowserPresetMap = {
    chrome: ChromePresets,
    firefox: FirefoxPresets,
    safari: SafariPresets
};
