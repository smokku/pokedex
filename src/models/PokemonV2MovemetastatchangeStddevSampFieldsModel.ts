import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetastatchangeStddevSampFieldsModelBase } from "./PokemonV2MovemetastatchangeStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetastatchangeStddevSampFieldsModel */
export interface PokemonV2MovemetastatchangeStddevSampFieldsModelType extends Instance<typeof PokemonV2MovemetastatchangeStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetastatchangeStddevSampFieldsModel */
export { selectFromPokemonV2MovemetastatchangeStddevSampFields, pokemonV2MovemetastatchangeStddevSampFieldsModelPrimitives, PokemonV2MovemetastatchangeStddevSampFieldsModelSelector } from "./PokemonV2MovemetastatchangeStddevSampFieldsModel.base"

/**
 * PokemonV2MovemetastatchangeStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MovemetastatchangeStddevSampFieldsModel = PokemonV2MovemetastatchangeStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
