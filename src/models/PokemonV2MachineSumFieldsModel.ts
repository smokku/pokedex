import { Instance } from "mobx-state-tree"
import { PokemonV2MachineSumFieldsModelBase } from "./PokemonV2MachineSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MachineSumFieldsModel */
export interface PokemonV2MachineSumFieldsModelType extends Instance<typeof PokemonV2MachineSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MachineSumFieldsModel */
export { selectFromPokemonV2MachineSumFields, pokemonV2MachineSumFieldsModelPrimitives, PokemonV2MachineSumFieldsModelSelector } from "./PokemonV2MachineSumFieldsModel.base"

/**
 * PokemonV2MachineSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2MachineSumFieldsModel = PokemonV2MachineSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
