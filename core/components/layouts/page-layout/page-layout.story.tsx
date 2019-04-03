import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '../../_helpers/story-helpers'
import StyledPlaceholder from '../../_helpers/story-layout-placeholder'
import Automation from '../../_helpers/automation-attribute'
import { PageLayout } from '../../'

storiesOf('Page Layout', module).add('default', () => (
  <Example title="default">
    <PageLayout>
      <PageLayout.Header {...Automation('page-header')}>
        <StyledPlaceholder />
      </PageLayout.Header>
      <PageLayout.Content {...Automation('page-content')}>
        <StyledPlaceholder />
      </PageLayout.Content>
    </PageLayout>
  </Example>
))
