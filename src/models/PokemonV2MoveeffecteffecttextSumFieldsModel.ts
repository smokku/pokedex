import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffecteffecttextSumFieldsModelBase } from "./PokemonV2MoveeffecteffecttextSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffecteffecttextSumFieldsModel */
export interface PokemonV2MoveeffecteffecttextSumFieldsModelType extends Instance<typeof PokemonV2MoveeffecteffecttextSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffecteffecttextSumFieldsModel */
export { selectFromPokemonV2MoveeffecteffecttextSumFields, pokemonV2MoveeffecteffecttextSumFieldsModelPrimitives, PokemonV2MoveeffecteffecttextSumFieldsModelSelector } from "./PokemonV2MoveeffecteffecttextSumFieldsModel.base"

/**
 * PokemonV2MoveeffecteffecttextSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2MoveeffecteffecttextSumFieldsModel = PokemonV2MoveeffecteffecttextSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
