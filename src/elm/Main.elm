module Main exposing (..)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing ( onClick )
import List
import String
import Basics

-- component import
import Components.Result exposing ( result )

-- APP
main : Program Never Int Msg
main =
  Html.beginnerProgram { model = model, view = view, update = update }


-- MODEL
type alias Model = Int

model : number
model = -1


-- UPDATE
type Msg = SetFalse | SetTrue

update : Msg -> Model -> Model
update msg model =
  case msg of
    SetFalse -> 0
    SetTrue -> 1

renderVideosList list =
  div []
    (List.map (\l -> div [ id (Basics.toString l) ] []) list)

setMsg id =
  case id of
    "l3" -> SetTrue
    _ -> SetFalse

renderLayoutsList list =
  div [ class "layouts-container" ]
    (List.map (\l -> div [ id (String.concat["l", Basics.toString l]), class "layout", onClick (setMsg l)] []) list)

-- VIEW
-- Html is defined as: elem [ attribs ][ children ]
view : Model -> Html Msg
view model =
  div [ class "container" ][
          div [ class "title" ] [
            text ( "WHERE'S " )
            , s [ class "crossed" ] [ text ("WALLY")]
            , text ( " MARIE ?" )
          ]
          , result model
          , div
            [ class "videos-container"] [
            renderVideosList (List.range 0 11)
            , renderLayoutsList ["l0","l1","l2","l3","l4","l5","l6","l7","l8","l9", "l10", "l11"]
            ]
  ]
