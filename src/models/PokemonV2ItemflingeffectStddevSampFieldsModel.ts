import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflingeffectStddevSampFieldsModelBase } from "./PokemonV2ItemflingeffectStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflingeffectStddevSampFieldsModel */
export interface PokemonV2ItemflingeffectStddevSampFieldsModelType extends Instance<typeof PokemonV2ItemflingeffectStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflingeffectStddevSampFieldsModel */
export { selectFromPokemonV2ItemflingeffectStddevSampFields, pokemonV2ItemflingeffectStddevSampFieldsModelPrimitives, PokemonV2ItemflingeffectStddevSampFieldsModelSelector } from "./PokemonV2ItemflingeffectStddevSampFieldsModel.base"

/**
 * PokemonV2ItemflingeffectStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ItemflingeffectStddevSampFieldsModel = PokemonV2ItemflingeffectStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
