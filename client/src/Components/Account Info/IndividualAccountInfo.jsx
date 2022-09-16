import React from 'react'

const IndividualAccountInfo = (props) => {
  return (
      <div>
              <p
                  style={{
                      display: props?.info?.height ? 'block' : 'none',
                  }}
              >
                  Height: {props?.info.height}
              </p>
              <p
                  style={{
                      display: props?.info?.weight ? 'block' : 'none',
                  }}
              >
                  Weight: {props?.info.weight} pounds
              </p>
              <p
                  style={{
                      display: props?.info?.gender ? 'block' : 'none',
                  }}
              >
                  Gender: {props?.info.gender}
              </p>
              <p
                  style={{
                      display: props?.info?.age ? 'block' : 'none',
                  }}
              >
                  Age: {props?.info.age} years old
              </p>
              <p
                  style={{
                      display: props?.info?.personalTrainer ? 'block' : 'none',
                  }}
              >
                  Personal Trainer: {props?.info?.ptTable.ptName}
              </p>
      </div>
  )
}

export default IndividualAccountInfo