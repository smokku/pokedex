import { Instance } from "mobx-state-tree"
import { PokemonV2ContesttypeStddevSampFieldsModelBase } from "./PokemonV2ContesttypeStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesttypeStddevSampFieldsModel */
export interface PokemonV2ContesttypeStddevSampFieldsModelType extends Instance<typeof PokemonV2ContesttypeStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesttypeStddevSampFieldsModel */
export { selectFromPokemonV2ContesttypeStddevSampFields, pokemonV2ContesttypeStddevSampFieldsModelPrimitives, PokemonV2ContesttypeStddevSampFieldsModelSelector } from "./PokemonV2ContesttypeStddevSampFieldsModel.base"

/**
 * PokemonV2ContesttypeStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ContesttypeStddevSampFieldsModel = PokemonV2ContesttypeStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
