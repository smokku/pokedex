import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonstatStddevSampFieldsModelBase } from "./PokemonV2PokemonstatStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonstatStddevSampFieldsModel */
export interface PokemonV2PokemonstatStddevSampFieldsModelType extends Instance<typeof PokemonV2PokemonstatStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonstatStddevSampFieldsModel */
export { selectFromPokemonV2PokemonstatStddevSampFields, pokemonV2PokemonstatStddevSampFieldsModelPrimitives, PokemonV2PokemonstatStddevSampFieldsModelSelector } from "./PokemonV2PokemonstatStddevSampFieldsModel.base"

/**
 * PokemonV2PokemonstatStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemonstatStddevSampFieldsModel = PokemonV2PokemonstatStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
