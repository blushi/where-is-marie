module Components.Result exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)

-- result component
result : Int -> Html a
result model =
  case model of
    0 -> div [ class "result false"] [ text ( "No, sorry I am not here !" )]
    1 -> div [ class "result true" ] [
          text ( "Yeay, you've found me, enjoy the full video " )
          , a [ href "https://www.youtube.com/watch?v=Rc8837-V4p8", target "_blank" ] [
            text ( "here " )
            ]
          , text ( ";)" )
          ]
    _ -> div [ class "result"] []
