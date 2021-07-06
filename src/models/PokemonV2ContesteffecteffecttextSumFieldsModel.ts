import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffecteffecttextSumFieldsModelBase } from "./PokemonV2ContesteffecteffecttextSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffecteffecttextSumFieldsModel */
export interface PokemonV2ContesteffecteffecttextSumFieldsModelType extends Instance<typeof PokemonV2ContesteffecteffecttextSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffecteffecttextSumFieldsModel */
export { selectFromPokemonV2ContesteffecteffecttextSumFields, pokemonV2ContesteffecteffecttextSumFieldsModelPrimitives, PokemonV2ContesteffecteffecttextSumFieldsModelSelector } from "./PokemonV2ContesteffecteffecttextSumFieldsModel.base"

/**
 * PokemonV2ContesteffecteffecttextSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2ContesteffecteffecttextSumFieldsModel = PokemonV2ContesteffecteffecttextSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
