import React from 'react'

const CodingPlatformLinks = ({cpl}) => {
  return (
    <section>
      <h2>Coding Platforms</h2>
        <div>
            <p><b>Leetcode</b> - {cpl.leetCode ?cpl.leetCode:"no account"}</p>
            <p><b>Codechef</b> - {cpl.codeChef?cpl.codeChef:"no account"}</p>
            <p><b>Codeforces</b> - {cpl.codeForces?cpl.codeForces:"no account"}</p>
        </div>
    </section>
  )
}

export default CodingPlatformLinks
