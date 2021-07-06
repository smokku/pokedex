import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesnameStddevSampFieldsModelBase } from "./PokemonV2PokemonspeciesnameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesnameStddevSampFieldsModel */
export interface PokemonV2PokemonspeciesnameStddevSampFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesnameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesnameStddevSampFieldsModel */
export { selectFromPokemonV2PokemonspeciesnameStddevSampFields, pokemonV2PokemonspeciesnameStddevSampFieldsModelPrimitives, PokemonV2PokemonspeciesnameStddevSampFieldsModelSelector } from "./PokemonV2PokemonspeciesnameStddevSampFieldsModel.base"

/**
 * PokemonV2PokemonspeciesnameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemonspeciesnameStddevSampFieldsModel = PokemonV2PokemonspeciesnameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
