import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformgenerationStddevFieldsModelBase } from "./PokemonV2PokemonformgenerationStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformgenerationStddevFieldsModel */
export interface PokemonV2PokemonformgenerationStddevFieldsModelType extends Instance<typeof PokemonV2PokemonformgenerationStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformgenerationStddevFieldsModel */
export { selectFromPokemonV2PokemonformgenerationStddevFields, pokemonV2PokemonformgenerationStddevFieldsModelPrimitives, PokemonV2PokemonformgenerationStddevFieldsModelSelector } from "./PokemonV2PokemonformgenerationStddevFieldsModel.base"

/**
 * PokemonV2PokemonformgenerationStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemonformgenerationStddevFieldsModel = PokemonV2PokemonformgenerationStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
