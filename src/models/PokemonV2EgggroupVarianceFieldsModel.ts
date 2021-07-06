import { Instance } from "mobx-state-tree"
import { PokemonV2EgggroupVarianceFieldsModelBase } from "./PokemonV2EgggroupVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EgggroupVarianceFieldsModel */
export interface PokemonV2EgggroupVarianceFieldsModelType extends Instance<typeof PokemonV2EgggroupVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EgggroupVarianceFieldsModel */
export { selectFromPokemonV2EgggroupVarianceFields, pokemonV2EgggroupVarianceFieldsModelPrimitives, PokemonV2EgggroupVarianceFieldsModelSelector } from "./PokemonV2EgggroupVarianceFieldsModel.base"

/**
 * PokemonV2EgggroupVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2EgggroupVarianceFieldsModel = PokemonV2EgggroupVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
