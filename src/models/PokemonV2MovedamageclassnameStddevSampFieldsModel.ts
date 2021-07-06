import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassnameStddevSampFieldsModelBase } from "./PokemonV2MovedamageclassnameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassnameStddevSampFieldsModel */
export interface PokemonV2MovedamageclassnameStddevSampFieldsModelType extends Instance<typeof PokemonV2MovedamageclassnameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassnameStddevSampFieldsModel */
export { selectFromPokemonV2MovedamageclassnameStddevSampFields, pokemonV2MovedamageclassnameStddevSampFieldsModelPrimitives, PokemonV2MovedamageclassnameStddevSampFieldsModelSelector } from "./PokemonV2MovedamageclassnameStddevSampFieldsModel.base"

/**
 * PokemonV2MovedamageclassnameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MovedamageclassnameStddevSampFieldsModel = PokemonV2MovedamageclassnameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
