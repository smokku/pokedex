import { Instance } from "mobx-state-tree"
import { PokemonV2GenerationAvgFieldsModelBase } from "./PokemonV2GenerationAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GenerationAvgFieldsModel */
export interface PokemonV2GenerationAvgFieldsModelType extends Instance<typeof PokemonV2GenerationAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenerationAvgFieldsModel */
export { selectFromPokemonV2GenerationAvgFields, pokemonV2GenerationAvgFieldsModelPrimitives, PokemonV2GenerationAvgFieldsModelSelector } from "./PokemonV2GenerationAvgFieldsModel.base"

/**
 * PokemonV2GenerationAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2GenerationAvgFieldsModel = PokemonV2GenerationAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
