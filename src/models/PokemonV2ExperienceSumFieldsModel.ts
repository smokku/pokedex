import { Instance } from "mobx-state-tree"
import { PokemonV2ExperienceSumFieldsModelBase } from "./PokemonV2ExperienceSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ExperienceSumFieldsModel */
export interface PokemonV2ExperienceSumFieldsModelType extends Instance<typeof PokemonV2ExperienceSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ExperienceSumFieldsModel */
export { selectFromPokemonV2ExperienceSumFields, pokemonV2ExperienceSumFieldsModelPrimitives, PokemonV2ExperienceSumFieldsModelSelector } from "./PokemonV2ExperienceSumFieldsModel.base"

/**
 * PokemonV2ExperienceSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2ExperienceSumFieldsModel = PokemonV2ExperienceSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
