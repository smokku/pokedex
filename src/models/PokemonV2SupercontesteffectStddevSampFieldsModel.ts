import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontesteffectStddevSampFieldsModelBase } from "./PokemonV2SupercontesteffectStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontesteffectStddevSampFieldsModel */
export interface PokemonV2SupercontesteffectStddevSampFieldsModelType extends Instance<typeof PokemonV2SupercontesteffectStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontesteffectStddevSampFieldsModel */
export { selectFromPokemonV2SupercontesteffectStddevSampFields, pokemonV2SupercontesteffectStddevSampFieldsModelPrimitives, PokemonV2SupercontesteffectStddevSampFieldsModelSelector } from "./PokemonV2SupercontesteffectStddevSampFieldsModel.base"

/**
 * PokemonV2SupercontesteffectStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2SupercontesteffectStddevSampFieldsModel = PokemonV2SupercontesteffectStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
