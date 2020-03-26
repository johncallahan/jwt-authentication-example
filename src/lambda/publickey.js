export const publicKey = `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA25x3w3Hc2gl9y4rkuT67
splun12PwlJgK5n0Qxm39COaZ9eE6f+UhkmUuS7nUTlqPREyXxZSJgtd2JeAq85i
TKcGnkTFAobA5nTfyuF3kDMOgK4HnZTAeyaOLhlD/CcTld29CtsaVj/XmXeXVHXR
1J9VDyKCMGrqsdTs6ogcPPmxGp9neBvwnYXsQd668JNoNTepPn3TSoXs0EIw0Npl
iUNDVzhsonSTFneYFhKWBnDZej+WQdjyqvzn+LDo4UqMiP56zTyqyrwxfMDLRsBj
fARGECKbtPMWqchNyx8N4EJE5nBK9PBntVLIyhsWgEtsatU1MIHaK7YppQtHKjdM
iRVBV6x2qwbtq7ijC3R3ASpaNVRKXJJ1vI5auiCEy38YiWXnYICc+7KO9RAKtRmb
g6Jcbo9IVIO2qpD+gwm09IRN/WYf8x7HI3CC3T38ypM56K/v7srO3Kqs+TsjWogC
l3RUjfonIN5pcK4w7x+WIyBpvqr0cT1dZYrWakuOCh/nFBPXHH6GoSsSdsZgwMlN
vq+t6OTsopMdkO0MybLiFC7XBWrfE6/EAZe1So2U0nnJ5pzjiN6AexblQSgNhFtJ
PyIEG7yuf5z5k/wH7KH7doGIGAT5qmUqmYN8PBnOsZ3m//zvSyU63Gzp3zI7OB8z
G7PWSm6yqWH0kdGLMtSdba0CAwEAAQ==
-----END PUBLIC KEY-----
`;

export async function handler() {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/plain"
    },
    body: publicKey
  };
}
