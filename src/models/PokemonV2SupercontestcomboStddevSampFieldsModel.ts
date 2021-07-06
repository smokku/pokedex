import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontestcomboStddevSampFieldsModelBase } from "./PokemonV2SupercontestcomboStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontestcomboStddevSampFieldsModel */
export interface PokemonV2SupercontestcomboStddevSampFieldsModelType extends Instance<typeof PokemonV2SupercontestcomboStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontestcomboStddevSampFieldsModel */
export { selectFromPokemonV2SupercontestcomboStddevSampFields, pokemonV2SupercontestcomboStddevSampFieldsModelPrimitives, PokemonV2SupercontestcomboStddevSampFieldsModelSelector } from "./PokemonV2SupercontestcomboStddevSampFieldsModel.base"

/**
 * PokemonV2SupercontestcomboStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2SupercontestcomboStddevSampFieldsModel = PokemonV2SupercontestcomboStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
