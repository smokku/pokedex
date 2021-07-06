import { Instance } from "mobx-state-tree"
import { PokemonV2NaturepokeathlonstatMaxFieldsModelBase } from "./PokemonV2NaturepokeathlonstatMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NaturepokeathlonstatMaxFieldsModel */
export interface PokemonV2NaturepokeathlonstatMaxFieldsModelType extends Instance<typeof PokemonV2NaturepokeathlonstatMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturepokeathlonstatMaxFieldsModel */
export { selectFromPokemonV2NaturepokeathlonstatMaxFields, pokemonV2NaturepokeathlonstatMaxFieldsModelPrimitives, PokemonV2NaturepokeathlonstatMaxFieldsModelSelector } from "./PokemonV2NaturepokeathlonstatMaxFieldsModel.base"

/**
 * PokemonV2NaturepokeathlonstatMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2NaturepokeathlonstatMaxFieldsModel = PokemonV2NaturepokeathlonstatMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
