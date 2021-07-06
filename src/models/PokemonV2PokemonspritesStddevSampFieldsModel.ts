import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspritesStddevSampFieldsModelBase } from "./PokemonV2PokemonspritesStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspritesStddevSampFieldsModel */
export interface PokemonV2PokemonspritesStddevSampFieldsModelType extends Instance<typeof PokemonV2PokemonspritesStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspritesStddevSampFieldsModel */
export { selectFromPokemonV2PokemonspritesStddevSampFields, pokemonV2PokemonspritesStddevSampFieldsModelPrimitives, PokemonV2PokemonspritesStddevSampFieldsModelSelector } from "./PokemonV2PokemonspritesStddevSampFieldsModel.base"

/**
 * PokemonV2PokemonspritesStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemonspritesStddevSampFieldsModel = PokemonV2PokemonspritesStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
