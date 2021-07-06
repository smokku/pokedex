import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformspritesStddevSampFieldsModelBase } from "./PokemonV2PokemonformspritesStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformspritesStddevSampFieldsModel */
export interface PokemonV2PokemonformspritesStddevSampFieldsModelType extends Instance<typeof PokemonV2PokemonformspritesStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformspritesStddevSampFieldsModel */
export { selectFromPokemonV2PokemonformspritesStddevSampFields, pokemonV2PokemonformspritesStddevSampFieldsModelPrimitives, PokemonV2PokemonformspritesStddevSampFieldsModelSelector } from "./PokemonV2PokemonformspritesStddevSampFieldsModel.base"

/**
 * PokemonV2PokemonformspritesStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemonformspritesStddevSampFieldsModel = PokemonV2PokemonformspritesStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
