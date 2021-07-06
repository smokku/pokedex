import { Instance } from "mobx-state-tree"
import { PokemonV2GenerationMaxFieldsModelBase } from "./PokemonV2GenerationMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GenerationMaxFieldsModel */
export interface PokemonV2GenerationMaxFieldsModelType extends Instance<typeof PokemonV2GenerationMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenerationMaxFieldsModel */
export { selectFromPokemonV2GenerationMaxFields, pokemonV2GenerationMaxFieldsModelPrimitives, PokemonV2GenerationMaxFieldsModelSelector } from "./PokemonV2GenerationMaxFieldsModel.base"

/**
 * PokemonV2GenerationMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2GenerationMaxFieldsModel = PokemonV2GenerationMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
