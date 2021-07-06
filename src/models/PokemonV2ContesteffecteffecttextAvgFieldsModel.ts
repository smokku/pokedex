import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffecteffecttextAvgFieldsModelBase } from "./PokemonV2ContesteffecteffecttextAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffecteffecttextAvgFieldsModel */
export interface PokemonV2ContesteffecteffecttextAvgFieldsModelType extends Instance<typeof PokemonV2ContesteffecteffecttextAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffecteffecttextAvgFieldsModel */
export { selectFromPokemonV2ContesteffecteffecttextAvgFields, pokemonV2ContesteffecteffecttextAvgFieldsModelPrimitives, PokemonV2ContesteffecteffecttextAvgFieldsModelSelector } from "./PokemonV2ContesteffecteffecttextAvgFieldsModel.base"

/**
 * PokemonV2ContesteffecteffecttextAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2ContesteffecteffecttextAvgFieldsModel = PokemonV2ContesteffecteffecttextAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
