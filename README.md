# Index

- Lesson 1 : The Vue instance
- Lesson 2 : Data & Methods
- Lesson 3 : Data Binding
- Lesson 4 : Events
- Lesson 5 : Event Modifiers
- Lesson 6 : Keyboard Events
- Lesson 7 : Two-Way Data binding
- Lesson 8 : Computed Properties
- Lesson 9 : Dynamic CSS classes
- Lesson 10 : Conditionals
- Lesson 11 : Looping with v-for
  _No longer using pure vue.js, learning more about vuetify framework, an easier to work with
  extension of vue.js, tutorial here: https://www.youtube.com/watch?v=2uZYKcKHgU0&list=PL4cUxeGkcC9g0MQZfHwKcuB0Yswgb3gA5_
- Lesson 2 : Vuetify : Button and Icons -- lesson 1 (branches, instead of folders for vuetify)

# Vuetify

## Notes and documentation links

## Lesson 4 : Text and Colours

- Text Documentation : https://vuetifyjs.com/en/styles/text-and-typography/#typography
- Colors: https://vuetifyjs.com/en/styles/colors/

## Lesson 5 : Buttons & Icons

- Buttons : https://vuetifyjs.com/en/components/buttons/#usage
- Icons : https://vuetifyjs.com/en/components/icons/#usage

UPDATES:

- If "flat" prop is not working for you, use "text" prop :)
- if <v-icon>email</v-icon> is not working try to type mdi-email
- if google material icons are not working for you follow these 3 steps

1. npm install material-design-icons-iconfont --save
2. In mian.js > import 'material-design-icons-iconfont/dist/material-design-icons.css'
3. In vuetify.js >
   export default new Vuetify({
   iconfont: 'md',
   });
   You don't have to write mdi or anything else in front of the keyword just write the
   keyword as it is written on the material(dot)io/resources/icons/

- An update: In vuetify@2.1.13, you must now use 'text' instead of 'flat' to create a flat button where the button outline is only seen upon mouse hover

## Lesson 6 : Breakpoints & Visibility

- Breakpoints: https://vuetifyjs.com/en/features/breakpoints/
- Visibility: https://vuetifyjs.com/en/styles/display/#visibility

## Lesson 7 : Toolbars

- Toolbars : https://vuetifyjs.com/en/components/toolbars/#background

UPDATES:

- 05:29 For me "mdi-exit-to-app" worked instead of "mdi-exit*to_app" or "exit_to_app"
  Even though official docs @ https://material.io/resources/icons/?search=exit*&icon=exit_to_app&style=baseline say "exit_to_app"
- now you should use text prop instead of flat in v-button
- 02:18 app prop is removed. Use
  <v-app-bar flat>
  </v-app-bar>
  to make the toolbar fixed at the top

## Lesson 8 : Navigation Drawers

- Navigation Drawers : https://www.youtube.com/watch?v=Qnj5CsUD0cs&list=PL4cUxeGkcC9g0MQZfHwKcuB0Yswgb3gA5&index=8

UPDATES:

- <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
  instead of<v-toolbar-side-icon>,
  <v-app-bar flat app> instead of <v-toolbar> if your having problems, fixed them for me.
  Closing tags needed, but all the other code works in between.
- Had to use the "temporary" prop on v-navigation-drawer to make it close by clicking away.
- This is a great tutorial series! I'm learning so much!
  I had some issues following this particular video, though. Firstly, just like another person here in the comments, I had to assign <v-navigation-drawer> the "temporary" prop for it to close by clicking away. In the end it looked like this for me:
  <v-navigation-drawer app v-model="drawer" temporary class="indigo">
  I had another issue with the <v-toolbar-side-icon> not actually showing an icon by default, which is odd, as all other icons have worked for me so far. I'm using the Material Design icons, not sure if that's significant. In the end I solved this by putting a <v-icon> inside <v-toolbar-side-icon> and specifically naming the icon that was most similar, which was "dehaze". It looked like this:
  <v-toolbar-side-icon @click="drawer = !drawer" class="grey--text"><v-icon>dehaze</v-icon></v-toolbar-side-icon>
  Once I fixed that, everything worked fine. I don't know why I did not get the icon straight away, but since I fixed it (or worked around it, rather) I figured I'd share. Just in case someone else runs into the same issue.

## Lesson 9 : Themes

- Themes : https://vuetifyjs.com/en/features/theme/#customizing

UPDATES:

- update on Vuetify instance syntax, see docs for more details. (The colors must be specified
  in a different way, with additional keys "theme" and "themes")

## Lesson 10 : Lists

- Lists : https://vuetifyjs.com/en/components/lists/

UPDATES:

- many components have been renamed
  <v-list-tile> -> <v-list-item> et al (anything -tile is now -item)
  <v-list-tile-sub-title> -> <v-list-item-subtitle>
  The avatar prop has been removed
- Updated icons for 6:30:
  mdi-view-dashboard
  mdi-folder
  mdi-account

## Lesson 11 : Adding Routes

- Na

## Lesson 12 : Padding and Margin

- Space and margin : https://vuetifyjs.com/en/styles/spacing/

## Lesson 13 and 14 : Grid system

- Grid View Documentation: https://vuetifyjs.com/en/components/grids/#offset

UPDATES:
<v-btn outlined block color="primary">word</v-btn>
Use the "color" prop instead of class, and the "outline" prop is now called "outlined"

The grid system is changed in v2, it's now row and col. Just want to add a tip about the "xs" class. It's not used for grid.
To specify the size for smallest devices, use cols property. E.g. cols="12" will make the col use 12 columns (i.e. the whole width).
