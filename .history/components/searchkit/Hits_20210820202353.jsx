import React from 'react'
import { EuiFlexGrid, EuiFlexItem, EuiCard, EuiFlexGroup, EuiTitle, EuiText } from '@elastic/eui'

export const HitsGrid = ({ data }) => (
  <EuiFlexGrid gutterSize="l">
    {data?.results.hits.items.map((hit) => (
      <EuiFlexItem key={hit.id} grow={2}>
        <EuiCard
          grow={false}
          textAlign="left"
          image={<img src={hit.fields.product_imagelinks} style={{ maxWidth: 200 }} alt="Nature" />}
          title={hit.fields.product_names}
          description={hit.fields.adresses}
        />
      </EuiFlexItem>
    ))}
  </EuiFlexGrid>
)

export const HitsList = ({ data }) => (
  <EuiFlexGrid>
    {data?.results.hits.items.map((hit) => (
      <EuiFlexItem key={hit.id}>

        <EuiFlexGroup gutterSize="xl">
          <EuiFlexItem>
            <EuiFlexGroup>
              <EuiFlexItem grow={false}>
                <img src={hit.fields.product_imagelinks} alt="Nature" style={{ height: '150px' }} />
              </EuiFlexItem>
              <EuiFlexItem grow={4}>
                <EuiTitle size="xs">
                  <h6>{hit.fields.product_names}</h6>
                </EuiTitle>
                <EuiText grow={false}>
                  <p>{hit.fields.adresses}</p>
                </EuiText>
              </EuiFlexItem>
              
            </EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexItem>
    ))}
  </EuiFlexGrid>
)
