import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffecteffecttextAvgFieldsModelBase } from "./PokemonV2MoveeffecteffecttextAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffecteffecttextAvgFieldsModel */
export interface PokemonV2MoveeffecteffecttextAvgFieldsModelType extends Instance<typeof PokemonV2MoveeffecteffecttextAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffecteffecttextAvgFieldsModel */
export { selectFromPokemonV2MoveeffecteffecttextAvgFields, pokemonV2MoveeffecteffecttextAvgFieldsModelPrimitives, PokemonV2MoveeffecteffecttextAvgFieldsModelSelector } from "./PokemonV2MoveeffecteffecttextAvgFieldsModel.base"

/**
 * PokemonV2MoveeffecteffecttextAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2MoveeffecteffecttextAvgFieldsModel = PokemonV2MoveeffecteffecttextAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
