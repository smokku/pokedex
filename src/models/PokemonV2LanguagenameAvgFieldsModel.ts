import { Instance } from "mobx-state-tree"
import { PokemonV2LanguagenameAvgFieldsModelBase } from "./PokemonV2LanguagenameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LanguagenameAvgFieldsModel */
export interface PokemonV2LanguagenameAvgFieldsModelType extends Instance<typeof PokemonV2LanguagenameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LanguagenameAvgFieldsModel */
export { selectFromPokemonV2LanguagenameAvgFields, pokemonV2LanguagenameAvgFieldsModelPrimitives, PokemonV2LanguagenameAvgFieldsModelSelector } from "./PokemonV2LanguagenameAvgFieldsModel.base"

/**
 * PokemonV2LanguagenameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2LanguagenameAvgFieldsModel = PokemonV2LanguagenameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
