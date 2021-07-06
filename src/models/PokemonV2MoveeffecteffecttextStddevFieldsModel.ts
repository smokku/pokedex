import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffecteffecttextStddevFieldsModelBase } from "./PokemonV2MoveeffecteffecttextStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffecteffecttextStddevFieldsModel */
export interface PokemonV2MoveeffecteffecttextStddevFieldsModelType extends Instance<typeof PokemonV2MoveeffecteffecttextStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffecteffecttextStddevFieldsModel */
export { selectFromPokemonV2MoveeffecteffecttextStddevFields, pokemonV2MoveeffecteffecttextStddevFieldsModelPrimitives, PokemonV2MoveeffecteffecttextStddevFieldsModelSelector } from "./PokemonV2MoveeffecteffecttextStddevFieldsModel.base"

/**
 * PokemonV2MoveeffecteffecttextStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2MoveeffecteffecttextStddevFieldsModel = PokemonV2MoveeffecteffecttextStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
