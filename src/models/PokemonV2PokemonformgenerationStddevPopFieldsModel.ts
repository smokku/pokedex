import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformgenerationStddevPopFieldsModelBase } from "./PokemonV2PokemonformgenerationStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformgenerationStddevPopFieldsModel */
export interface PokemonV2PokemonformgenerationStddevPopFieldsModelType extends Instance<typeof PokemonV2PokemonformgenerationStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformgenerationStddevPopFieldsModel */
export { selectFromPokemonV2PokemonformgenerationStddevPopFields, pokemonV2PokemonformgenerationStddevPopFieldsModelPrimitives, PokemonV2PokemonformgenerationStddevPopFieldsModelSelector } from "./PokemonV2PokemonformgenerationStddevPopFieldsModel.base"

/**
 * PokemonV2PokemonformgenerationStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemonformgenerationStddevPopFieldsModel = PokemonV2PokemonformgenerationStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
