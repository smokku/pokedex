import { Instance } from "mobx-state-tree"
import { PokemonV2ContesttypeStddevPopFieldsModelBase } from "./PokemonV2ContesttypeStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesttypeStddevPopFieldsModel */
export interface PokemonV2ContesttypeStddevPopFieldsModelType extends Instance<typeof PokemonV2ContesttypeStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesttypeStddevPopFieldsModel */
export { selectFromPokemonV2ContesttypeStddevPopFields, pokemonV2ContesttypeStddevPopFieldsModelPrimitives, PokemonV2ContesttypeStddevPopFieldsModelSelector } from "./PokemonV2ContesttypeStddevPopFieldsModel.base"

/**
 * PokemonV2ContesttypeStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ContesttypeStddevPopFieldsModel = PokemonV2ContesttypeStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
