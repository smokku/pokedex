import { Instance } from "mobx-state-tree"
import { PokemonV2PokemontypeStddevSampFieldsModelBase } from "./PokemonV2PokemontypeStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemontypeStddevSampFieldsModel */
export interface PokemonV2PokemontypeStddevSampFieldsModelType extends Instance<typeof PokemonV2PokemontypeStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemontypeStddevSampFieldsModel */
export { selectFromPokemonV2PokemontypeStddevSampFields, pokemonV2PokemontypeStddevSampFieldsModelPrimitives, PokemonV2PokemontypeStddevSampFieldsModelSelector } from "./PokemonV2PokemontypeStddevSampFieldsModel.base"

/**
 * PokemonV2PokemontypeStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemontypeStddevSampFieldsModel = PokemonV2PokemontypeStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
