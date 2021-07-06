import { Instance } from "mobx-state-tree"
import { PokemonV2TypeAvgFieldsModelBase } from "./PokemonV2TypeAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypeAvgFieldsModel */
export interface PokemonV2TypeAvgFieldsModelType extends Instance<typeof PokemonV2TypeAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypeAvgFieldsModel */
export { selectFromPokemonV2TypeAvgFields, pokemonV2TypeAvgFieldsModelPrimitives, PokemonV2TypeAvgFieldsModelSelector } from "./PokemonV2TypeAvgFieldsModel.base"

/**
 * PokemonV2TypeAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2TypeAvgFieldsModel = PokemonV2TypeAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
