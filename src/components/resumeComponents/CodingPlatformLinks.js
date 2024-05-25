import React from 'react'

const CodingPlatformLinks = ({cpl}) => {
  return (
    <section>
      <h2>Coding Platforms</h2>
        <div>
            <p><b>Leetcode</b> - {cpl.leetcode ?cpl.leetcode:"no account"}</p>
            <p><b>Codechef</b> - {cpl.codechef?cpl.codechef:"no account"}</p>
            <p><b>Codeforces</b> - {cpl.codeforces?cpl.codeforces:"no account"}</p>
        </div>
    </section>
  )
}

export default CodingPlatformLinks
