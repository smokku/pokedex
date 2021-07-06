import { Instance } from "mobx-state-tree"
import { PokemonV2NaturepokeathlonstatStddevFieldsModelBase } from "./PokemonV2NaturepokeathlonstatStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NaturepokeathlonstatStddevFieldsModel */
export interface PokemonV2NaturepokeathlonstatStddevFieldsModelType extends Instance<typeof PokemonV2NaturepokeathlonstatStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturepokeathlonstatStddevFieldsModel */
export { selectFromPokemonV2NaturepokeathlonstatStddevFields, pokemonV2NaturepokeathlonstatStddevFieldsModelPrimitives, PokemonV2NaturepokeathlonstatStddevFieldsModelSelector } from "./PokemonV2NaturepokeathlonstatStddevFieldsModel.base"

/**
 * PokemonV2NaturepokeathlonstatStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2NaturepokeathlonstatStddevFieldsModel = PokemonV2NaturepokeathlonstatStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
