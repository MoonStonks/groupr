import React, { useState, useEffect, useContext } from "react";
import {
  chakra,
  Box,
  Center,
  Heading,
  Text,
  Input,
  Button,
  HStack,
  Image,
  Link,
  Spacer,
  Flex,
  VStack,
  Icon,
  IconButton,
  Circle,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Tooltip,
} from "@chakra-ui/react";
/**
 * This component is for a user info box containing user info such as
 * skills, name, about, interests, what they are looking for, status,
 * current role  position
 */

export default function Scout() {
  return (
    <Box>
      <p>
        <Heading color="white">Scout</Heading>
        <Text color="white">
          Lorem Ipsum "Neque porro quisquam est qui dolorem ipsum quia dolor sit
          amet, consectetur, adipisci velit..." "There is no one who loves pain
          itself, who seeks after it and wants to have it, simply because it is
          pain..." Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas nulla enim, fringilla vitae varius ut, commodo a turpis.
          Fusce turpis tellus, lacinia ut velit et, faucibus eleifend lorem.
          Quisque aliquet consectetur odio, tincidunt tincidunt enim eleifend
          nec. Aliquam erat volutpat. Aenean neque augue, semper nec ante eget,
          imperdiet luctus risus. Suspendisse nunc nisi, pretium eget arcu eget,
          condimentum pretium neque. Donec et diam ut turpis volutpat rhoncus.
          Phasellus mauris dolor, facilisis sed fermentum eu, ornare at arcu.
          Sed ac risus erat. Etiam in elit dictum, placerat erat eget, auctor
          nunc. Donec sit amet condimentum sapien, quis rhoncus enim. Cras
          fringilla orci ac massa tempor ullamcorper. Mauris mollis, ipsum eu
          vulputate facilisis, augue nulla elementum ligula, sit amet sodales
          neque mi et diam. Nam luctus nisl ut interdum elementum. Aliquam erat
          volutpat. Phasellus mollis, risus quis tincidunt porttitor, nisl
          lectus rutrum felis, eget gravida magna tellus ut risus. Ut a ex a
          orci scelerisque rutrum. Integer euismod tortor nec faucibus faucibus.
          Sed viverra elit at ligula tristique dapibus. In id dui congue,
          rhoncus odio nec, elementum odio. Etiam tempus sollicitudin lacus quis
          tincidunt. In dapibus cursus nisi. Ut elementum orci ut mauris
          egestas, eget egestas ipsum dapibus. Donec blandit feugiat porta.
          Fusce consectetur tellus at tortor maximus ultrices. Phasellus at
          dolor sed sapien pellentesque efficitur. Etiam et urna non urna
          faucibus tincidunt. Ut lobortis, ex pulvinar vehicula suscipit, libero
          diam malesuada nulla, vel venenatis risus velit id magna. Ut malesuada
          urna non enim venenatis dictum. Nullam at arcu in lorem laoreet dictum
          quis sit amet nulla. Morbi a vehicula magna, dapibus facilisis ipsum.
          Integer scelerisque dolor nulla, quis maximus velit vulputate non.
          Morbi eu porta sapien, vitae interdum lacus. Sed posuere rhoncus
          purus, maximus interdum magna ultricies a. Integer nibh erat, interdum
          ut ligula eu, semper commodo leo. Integer vel dolor varius, ultrices
          velit vitae, finibus eros. Morbi congue id sem ut sagittis. Vestibulum
          accumsan, mi id eleifend ultrices, eros elit convallis dui, quis
          convallis est quam eu justo. Aliquam eleifend turpis vel lobortis
          mollis. Fusce gravida metus justo, fringilla tincidunt turpis
          facilisis sed. Ut sed tristique felis, eget sollicitudin magna. Fusce
          vitae bibendum quam. Etiam libero elit, varius in metus vel, rutrum
          porta turpis. Curabitur egestas felis eget arcu suscipit pulvinar.
          Curabitur augue arcu, euismod sed luctus sed, pharetra porta lorem.
          Fusce consequat sodales dui, feugiat mollis est pulvinar et. Nam sit
          amet placerat lorem, eu egestas lacus. Integer iaculis lectus turpis,
          ac vestibulum lacus interdum at. Nullam lacinia fringilla purus, eget
          tincidunt lorem euismod nec. Vestibulum pellentesque elit eu eros
          sollicitudin, eget bibendum diam fermentum. Duis id eros et erat
          tristique egestas ac non erat. Nullam vel libero sed est consequat
          iaculis sed vel erat. Etiam ut orci varius, luctus leo ut, luctus
          eros. Vestibulum ut aliquet nisi. Nullam ultrices tempor erat eget
          cursus. Nulla ut malesuada quam. Praesent quis convallis sem. Vivamus
          at est elementum, bibendum tellus ut, sagittis purus. Cras et porta
          mi. Quisque a lacus viverra, fringilla massa quis, iaculis mauris.
          Nunc vehicula lobortis ipsum, in convallis orci sollicitudin id.
          Aenean luctus lorem quis dolor commodo, a vehicula ligula eleifend.
          Cras eget odio semper, molestie dolor a, sollicitudin est. In
          condimentum purus et malesuada rhoncus. Proin porttitor molestie diam.
          Cras eget massa lacus. Sed efficitur nibh in eros fringilla gravida.
          Nunc fringilla faucibus magna eu convallis. Nullam sed venenatis dui.
          Nullam et mattis urna, vel lobortis tortor. Aenean gravida lectus sed
          leo placerat, elementum porttitor nulla luctus. Proin ornare dolor
          ipsum, vel fermentum nibh auctor laoreet. Donec in risus sed diam
          tincidunt rhoncus. Mauris sit amet ultrices tellus, vitae dapibus
          ligula. Sed at auctor ipsum, id placerat elit. Aliquam sed ante id
          quam scelerisque tristique. In hac habitasse platea dictumst. Integer
          pretium finibus hendrerit. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Sed sed ligula quis purus
          pretium scelerisque gravida et mauris. Fusce porta rhoncus eros.
          Vivamus porttitor pretium odio viverra sagittis. Pellentesque ut nunc
          vel risus vehicula elementum at vel lectus. Sed ut purus massa. Proin
          vitae pellentesque arcu, sed pellentesque lacus. Nam ac erat
          sollicitudin diam viverra euismod in nec dui. Suspendisse in gravida
          ipsum. Quisque luctus nisi ac lectus tempus ullamcorper ut bibendum
          ex. Quisque in erat eu nisi suscipit eleifend sit amet lacinia ipsum.
          Mauris eget feugiat lorem.
        </Text>
      </p>
    </Box>
  );
}
