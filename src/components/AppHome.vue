<template>
    <div>
        <Toolbar/>
        <Carousel/>
        <AppFooter/>
    </div>
</template>

<script>
import Toolbar from './Toolbar'
import AppFooter from './AppFooter'
import Carousel from './Carousel'

export default {
  components: { AppFooter, Toolbar, Carousel }
}
</script>
