const { sumTokens2 } = require('../helper/unwrapLPs')

async function tvl(api) {
  // Add your contract address(es) and token address(es) here
  return sumTokens2({ api, balances: {} })
}

module.exports = {
  timetravel: true,
  misrepresentedTokens: false,
  methodology: 'Tracks TVL of Sales Network protocols.',
  start: 1710000000,
  ethereum: {
    tvl,
  },
}
