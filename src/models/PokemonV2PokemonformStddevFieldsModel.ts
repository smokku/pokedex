import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformStddevFieldsModelBase } from "./PokemonV2PokemonformStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformStddevFieldsModel */
export interface PokemonV2PokemonformStddevFieldsModelType extends Instance<typeof PokemonV2PokemonformStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformStddevFieldsModel */
export { selectFromPokemonV2PokemonformStddevFields, pokemonV2PokemonformStddevFieldsModelPrimitives, PokemonV2PokemonformStddevFieldsModelSelector } from "./PokemonV2PokemonformStddevFieldsModel.base"

/**
 * PokemonV2PokemonformStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemonformStddevFieldsModel = PokemonV2PokemonformStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
