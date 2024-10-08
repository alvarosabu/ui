<script setup lang="ts">
import { useDark, useFocus, useToggle } from '@vueuse/core'
import { ref } from 'vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const inputRef = ref<HTMLInputElement | null>(null)
const { focused } = useFocus(inputRef)
</script>

<template>
  <div
    relative
    inline-block
    class="dark-mode-switch"
    :class="{ 'outline-solid-blue-500': focused }"
  >
    <input
      id="dark-switch"
      ref="inputRef"
      type="checkbox"
      w-2
      h-2
      absolute
      opacity-0
      :aria-label="`Enable ${isDark ? 'light' : 'dark'} Mode`"
      tab-index="0"
      :checked="!isDark"
      @change="toggleDark()"
    />
    <label
      for="dark-switch"
      relative
      cursor-pointer
    >
      <div class="planet"></div>
      <div class="dots">
        <span
          v-for="dot of [0, 45, 90, 135, 180, 225, 270, 315]"
          :key="`dot-${dot}`"
          :class="`dot-${dot}`"
        ></span>
      </div>
    </label>
  </div>
</template>

<style lang="scss">
@use 'sass:math';

$sun: #ffca3d;
$shadow: #808996;
$moon: #d8d8d9;
$moon-stroke: #cbcbcb;
$crater: #b3b5b8;
$crater-stroke: #878e9b;
$planet-radius: 0.75rem;
$planet-diameter: $planet-radius * 2;
$dot-radius: 0.25rem;
$orbit-radius: 1rem;

$angles: 0, 45, 90, 135, 180, 225, 270, 315;

$pi: 3.14159265359;
$_precision: 10;

@function pow($base, $exp) {
  $value: $base;
  @if $exp > 1 {
    @for $i from 2 through $exp {
      $value: $value * $base;
    }
  }
  @if $exp < 1 {
    @for $i from 0 through -$exp {
      $value: $value / $base;
    }
  }
  @return $value;
}

@function fact($num) {
  $fact: 1;
  @if $num > 0 {
    @for $i from 1 through $num {
      $fact: $fact * $i;
    }
  }
  @return $fact;
}

@function _to_unitless_rad($angle) {
  @if unit($angle) == 'deg' {
    $angle: $angle / 180deg * $pi;
  }
  @if unit($angle) == 'rad' {
    $angle: $angle / 1rad;
  }
  @return $angle;
}

@function sin($angle) {
  $a: _to_unitless_rad($angle);
  $sin: $a;
  @for $n from 1 through $_precision {
    $sin: $sin + (math.div(pow(-1, $n), fact(2 * $n + 1))) * pow($a, (2 * $n + 1));
  }
  @return $sin;
}

@function cos($angle) {
  $a: _to_unitless_rad($angle);
  $cos: 1;
  @for $n from 1 through $_precision {
    $cos: $cos + (math.div(pow(-1, $n), fact(2 * $n))) * pow($a, 2 * $n);
  }
  @return $cos;
}

@function tan($angle) {
  @return sin($angle) / cos($angle);
}

.dark-mode-switch {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

  .planet {
    @apply overflow-hidden rounded-full absolute cursor-pointer;

    width: $planet-diameter;
    height: $planet-diameter;

    background-color: $sun;
    transition: background-color 400ms ease-in-out;

    &::after {
      @apply rounded-full relative block;

      transform: translate(90%, -70%);

      width: $planet-diameter;
      height: $planet-diameter;

      background-color: $shadow;
      content: '';
      transition:
        transform 400ms ease-in-out,
        opacity 200ms ease-in-out;
    }
  }

  .dots {
    width: $planet-diameter;
    height: $planet-diameter;
    transform: rotate(-180deg);
    transition: transform 400ms ease-in-out;
  }

  .shadow {
    fill: $shadow;
    width: calc($planet-radius / 2);
    height: calc($planet-radius / 2);
  }

  [class*='dot-'] {
    @apply rounded-full block absolute;

    width: $dot-radius;
    height: $dot-radius;

    top: $planet-radius - math.div($dot-radius, 2);
    left: $planet-radius - math.div($dot-radius, 2);

    background-color: $sun;
    opacity: 1;
    transition:
      transform 400ms ease-in-out,
      opacity 200ms ease-in-out;
  }

  @each $angle in $angles {
    .dot-#{$angle} {
      transform: translate(
        $orbit-radius * cos(math.div($angle * $pi, 180)),
        $orbit-radius * sin(math.div($angle * $pi, 180))
      );
    }
  }

  $sizes: 40px, 50px, 80px;

  @each $size in $sizes {
    .icon-#{$size} {
      font-size: $size;
      height: $size;
      width: $size;
    }
  }

  [class*='crater-'] {
    fill: $crater;
    stroke: $crater-stroke;
  }

  input:checked ~ label {
    .planet {
      background-color: $moon;

      box-shadow: inset 0 0 0 1px $moon-stroke;

      &::after {
        /*       @apply transform translate-x-0.25 -translate-y-0.25; */
        transform: translate(20%, -19%);

        border: 1px solid $moon-stroke;

        background-color: $shadow;
        content: '';
      }
    }

    .dots {
      transform: rotate(0deg);
    }

    [class*='dot-'] {
      transition:
        transform 400ms ease,
        opacity 200ms ease;
      transform: translate(calc(50% - 3px), calc(50% - 3px));
      opacity: 0;
    }

    .dot-90 {
      opacity: 1;
      background-color: $crater;
      border: 1px solid $crater-stroke;
      transform: translate(1px, 1px) scale(1.25);
    }

    .dot-135 {
      opacity: 0;
      background-color: $crater;
      border: 1px solid $crater-stroke;
      transform: translate(-5px, -1px) scale(1.15);
    }

    .dot-180 {
      opacity: 1;
      background-color: $crater;
      border: 1px solid $crater-stroke;
      transform: translate(5px, -5px) scale(0.85);
    }

    .dot-45 {
      opacity: 1;
      background-color: $crater;
      border: 1px solid $crater-stroke;
      transform: translate(-2px, -7px) scale(0.65);
    }
  }
}
</style>
