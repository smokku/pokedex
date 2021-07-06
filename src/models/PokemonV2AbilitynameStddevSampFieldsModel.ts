import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitynameStddevSampFieldsModelBase } from "./PokemonV2AbilitynameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitynameStddevSampFieldsModel */
export interface PokemonV2AbilitynameStddevSampFieldsModelType extends Instance<typeof PokemonV2AbilitynameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitynameStddevSampFieldsModel */
export { selectFromPokemonV2AbilitynameStddevSampFields, pokemonV2AbilitynameStddevSampFieldsModelPrimitives, PokemonV2AbilitynameStddevSampFieldsModelSelector } from "./PokemonV2AbilitynameStddevSampFieldsModel.base"

/**
 * PokemonV2AbilitynameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2AbilitynameStddevSampFieldsModel = PokemonV2AbilitynameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
