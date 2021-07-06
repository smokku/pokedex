import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonstatStddevFieldsModelBase } from "./PokemonV2PokemonstatStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonstatStddevFieldsModel */
export interface PokemonV2PokemonstatStddevFieldsModelType extends Instance<typeof PokemonV2PokemonstatStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonstatStddevFieldsModel */
export { selectFromPokemonV2PokemonstatStddevFields, pokemonV2PokemonstatStddevFieldsModelPrimitives, PokemonV2PokemonstatStddevFieldsModelSelector } from "./PokemonV2PokemonstatStddevFieldsModel.base"

/**
 * PokemonV2PokemonstatStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemonstatStddevFieldsModel = PokemonV2PokemonstatStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
