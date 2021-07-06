import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassnameStddevPopFieldsModelBase } from "./PokemonV2MovedamageclassnameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassnameStddevPopFieldsModel */
export interface PokemonV2MovedamageclassnameStddevPopFieldsModelType extends Instance<typeof PokemonV2MovedamageclassnameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassnameStddevPopFieldsModel */
export { selectFromPokemonV2MovedamageclassnameStddevPopFields, pokemonV2MovedamageclassnameStddevPopFieldsModelPrimitives, PokemonV2MovedamageclassnameStddevPopFieldsModelSelector } from "./PokemonV2MovedamageclassnameStddevPopFieldsModel.base"

/**
 * PokemonV2MovedamageclassnameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MovedamageclassnameStddevPopFieldsModel = PokemonV2MovedamageclassnameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
