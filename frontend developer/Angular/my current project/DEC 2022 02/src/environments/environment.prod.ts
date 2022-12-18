
const baseUrl = `devvca.pushcord.com:8444`;
const wsBaseUrl = 'devops2.pushcord.com:8444';
const devopsHelperApiUrl = 'https://devops.pushcord.com:8444'
const baseSts = 'https://devops.pushcord.com'
const dbMonitoringHost = "https://devvca.pushcord.com:8444";
const nsLogsBaseUrl = "https://devvca.pushcord.com:8000"

export const environment = {
  production: true,
  baseUrl: `https://${baseUrl}/devops/secure`,
  sts: baseSts + '/devops-sts',
  vcaIdentityUrl: devopsHelperApiUrl + '/devops-identity/api/v1.0/ui',
  websocketBaseUrl: `wss://${wsBaseUrl}`,
  dbMonitoringHost: dbMonitoringHost,
  nsLogsBaseUrl: nsLogsBaseUrl
};
