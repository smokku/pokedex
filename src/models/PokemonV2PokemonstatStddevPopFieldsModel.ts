import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonstatStddevPopFieldsModelBase } from "./PokemonV2PokemonstatStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonstatStddevPopFieldsModel */
export interface PokemonV2PokemonstatStddevPopFieldsModelType extends Instance<typeof PokemonV2PokemonstatStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonstatStddevPopFieldsModel */
export { selectFromPokemonV2PokemonstatStddevPopFields, pokemonV2PokemonstatStddevPopFieldsModelPrimitives, PokemonV2PokemonstatStddevPopFieldsModelSelector } from "./PokemonV2PokemonstatStddevPopFieldsModel.base"

/**
 * PokemonV2PokemonstatStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemonstatStddevPopFieldsModel = PokemonV2PokemonstatStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
